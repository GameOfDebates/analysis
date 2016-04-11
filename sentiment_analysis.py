from alchemyapi import AlchemyAPI
import json
import sys
import os

transcript = sys.argv[1]
names = []
texts = [""] * 10
for line in transcript:
    for word in line.split():
        if word.isupper():
            if ':' in word:
                if word not in names:
                    names.append(word)
    for i in range(len(names)):
        if line.find(names[i]) > -1:
            texts[i] += line
                    
                
alchemyapi = AlchemyAPI()

path = sys.argv[1]
file_name = str(os.path.splitext(path)[0]) + '_sentiment.txt'
f = open(file_name, 'w')
    
for i in range(len(names)):
    response = alchemyapi.sentiment('text', texts[i])
    
    if response['status'] == 'OK':
        f.write(str(texts[i].split()[0]) + ' Sentiment \n')
        f.write('type: ' + str(response['docSentiment']['type']) + '\n')

        if 'score' in response['docSentiment']:
            f.write('score: ' + str(response['docSentiment']['score']) + '\n \n')
    else:
        print('Error in sentiment analysis call: ',
              response['statusInfo'])

