from alchemyapi import AlchemyAPI
import json
import sys
import os
import csv
from os.path import basename

def getnames():
    with open("transcripts/Democrats/dem-2-4-2016.txt", 'r') as t:
        names = []
        for line in t:
            for word in line.split():
                if word.isupper():
                    if ':' in word:
                        if word not in names:
                            names.append(word)
    return names

def gettexts(names):
    texts = [""] * 15
    for i in range(len(names)):
        with open("transcripts/Democrats/dem-2-4-2016.txt", 'r') as t:
            for line in t:
                if line.find(names[i]) > -1:
                    texts[i] += line
                else:
                    if not any(name in line for name in names):
                        texts[i] += line
    return texts

                
def do_analysis(names, texts):
    alchemyapi = AlchemyAPI()

    base=os.path.basename('transcripts/Democrats/dem-2-4-2016.txt')
    debate_name = os.path.splitext(base)[0]

    file_name = 'data/targeted sentiments/Democrat/' + str(debate_name) + '_sentiment.txt'
    f = open(file_name, 'w')

    filepath = "data/topics/Democratic Debates_Top Three Topics.csv"
    all_topics = csv.DictReader(open(filepath, "r"))
    dt_1 = []

    for row in all_topics:
        dt_1.append(row[debate_name])
    dt_2 = [x.split('\'') for x in dt_1]
    dt_3 = [y  for x in dt_2[0] for y in x.split(',')]
    
    for i in range(len(names)):
        for j in range(3):
            topic = [y  for x in dt_2[j] for y in x.split(',')]
            response = alchemyapi.sentiment_targeted('text', texts[i], topic[:(len(topic)-1)])
            if response['status'] == 'OK':
                f.write(topic[len(topic)-1] + ':\n')
                f.write(names[i] + ' Sentiment \n')
                f.write('type: ' + str(response['docSentiment']['type']) + '\n')

                if 'score' in response['docSentiment']:
                    f.write('score: ' + str(response['docSentiment']['score']) + '\n \n')
            else:
                print('Error in sentiment analysis call: ',
                      response['statusInfo'])

names = getnames()
texts = gettexts(names)
do_analysis(names, texts)