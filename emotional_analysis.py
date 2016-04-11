from alchemyapi import AlchemyAPI
import json
import numpy as np

text = open("transcripts/Democrats/dem-1-17-2016-wl.txt")
print(text)

alchemyapi = AlchemyAPI()

print('Processing text: ', text)
print('')

response = alchemyapi.sentiment('text', text)

if response['status'] == 'OK':
    print('## Response Object ##')
    print(json.dumps(response, indent=4))

    print('')
    print('## Sentiment ##')
    print('type: ', response['docSentiment']['type'])

    if 'score' in response['docSentiment']:
        print('score: ', response['docSentiment']['score'])
else:
    print('Error in sentiment analysis call: ',
          response['statusInfo'])