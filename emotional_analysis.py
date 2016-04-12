from alchemyapi import AlchemyAPI
import json
import sys
import os

#transcript = sys.argv[1]

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

    path = 'transcripts/Democrats/dem-2-4-2016.txt'
    file_name = str(os.path.splitext(path)[0]) + '_sentiment.txt'
    f = open(file_name, 'w')

    for i in range(len(names)):
        response = alchemyapi.sentiment_targeted('text', texts[i], 'healthcare')

        if response['status'] == 'OK':
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