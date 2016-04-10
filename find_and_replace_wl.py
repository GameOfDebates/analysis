__author__ = 'Pranav'


dic = {'(APPLAUSE)':'', '(LAUGHTER)':'', '(CROSSTALK)':'',
        '(BEGIN VIDEO CLIP)':'', '(END VIDEO CLIP)':'', '(COMMERCIAL BREAK)':'',
       ' (inaudible)':'', '(inaudible)':'', '(BOOING)':'',
       '(AUDIENCE BOOING)':'', '(BELL RINGS)':'', ' (ph)':'',
       '(ph)':'', '(CHEERING)':'', '(BELL RINGING)':'',
       '(AUDIENCE)':'', '(AUDIENCE REACTION)':'', '(CHEERING AND APPLAUSE)':'',
       ' (INAUDIBLE)':'', ' (?)':'', '(MIX OF APPLAUSE AND BOOING)':'',
       '(OFF MIKE)':'', '(SPEAKING SPANISH)':'', '(Inaudible)':'',
       ' (in Spanish)':'', ' (sic)':'', '(AUDIENCE BOOS)':'',
       '(MOMENT OF SILENCE)':'', '(BELL SOUND)':'', '(STAR SPANGLED BANNER)':'',
       '(BELL RING)':'', '(LAUGHTER AND APPLAUSE)':'', ' (thousand)':'',
       'BLITZER: ':'', 'PAUL: ':'',  'CHRISTIE: ':'',
       'KASICH: ':'', 'FIORINA: ':'',  'CARSON: ':'',
       'RUBIO: ':'', 'BUSH: ':'',  'TRUMP: ':'',
       'BASH: ':'', 'CRUZ: ':'',  'HEWITT: ':'',
       'QUESTION: ':'', 'CRUZ;':'',  'CRUZ : ':'',
       'JOSH JACOB, COLLEGE STUDENT: ':'', 'CAVUTO: ':'',  'NEIL CAVUTO: ':'',
       'MARIA BARTIROMO: ':'', 'BARTIROMO: ':'',  'CHRISTIE: ':'',
       '(UNKNOWN): ':'', 'TRUMP:. ':'',  'BARITROMO: ':'',
       'AUDIENCE: ':'', 'NEIL ':'',  'MARIA ':'',
       'BAIER: ':'', 'BRET BAIER: ':'',  'CHRIS WALLACE: ':'',
       'MEGYN KELLY: ':'', 'WALLACE: ':'',  'KELLY: ':'',
       'PAUL:.':'', 'MEGYN: ':'',  'CURZ: ':'',
       'WALLLACE: ':'', 'MUIR: ':'',  'RADDATZ: ':'',
       'HAM: ':'', 'MCELVEEN: ':'',  'STEPHANOPOULOS: ':'',
       'KARL: ':'', 'DICKERSON: ':'',  'ANNOUNCER: ':'',
       'STRASSEL: ':'', 'GARRETT: ':'',  'GARRET: ':'',
       'TRUMP:.':'', 'CELESTE: ':'',  'ARRASAS: ':'',
       'UNIDENTIFIED MALE: ':'', 'CRUZ:...:\n':'',  'ARRARAS: ':'',
       'BASH:':'', 'TRUMP:':'',  'RUBIO:':'',
       'TRUMO: ':'', 'CUOMO: ':'',  'O\'REILLY: ':'',
       'HANNITY: ':'', 'UNIDENTIFIABLE MALE: ':'',  'KELLy: ':'',
       'TAPPER: ':'', 'DINAN: ':'',  'KAISCH: ':'', 'CUBA: ':''}


def replace_all(text, dic):
    for i, j in dic.iteritems():
        text = text.replace(i, j)
    return text


first_text = open('rep_12-15-2015_raw.txt', 'r').read()
first_text_edited = replace_all(first_text, dic)
first_file_edited = open('rep-12-15-2015-wl.txt', 'w')
first_file_edited.write(first_text_edited)

second_text = open('rep_1-14-2016_raw.txt', 'r').read()
second_text_edited = replace_all(second_text, dic)
second_file_edited = open('rep_1-14-2016-wl.txt', 'w')
second_file_edited.write(second_text_edited)

third_text = open('rep_1-28-2016_raw.txt', 'r').read()
third_text_edited = replace_all(third_text, dic)
third_file_edited = open('rep_1-28-2016-wl.txt', 'w')
third_file_edited.write(third_text_edited)

fourth_text = open('rep_2-6-2016_raw.txt', 'r').read()
fourth_text_edited = replace_all(fourth_text, dic)
fourth_file_edited = open('rep_2-6-2016-wl.txt', 'w')
fourth_file_edited.write(fourth_text_edited)

fifth_text = open('rep_2-13-2016_raw.txt', 'r').read()
fifth_text_edited = replace_all(fifth_text, dic)
fifth_file_edited = open('rep_2-13-2016-wl.txt', 'w')
fifth_file_edited.write(fifth_text_edited)

sixth_text = open('rep_2-25-2016_raw.txt', 'r').read()
sixth_text_edited = replace_all(sixth_text, dic)
sixth_file_edited = open('rep_2-25-2016-wl.txt', 'w')
sixth_file_edited.write(sixth_text_edited)

seventh_text = open('rep_3-3-2016_raw.txt', 'r').read()
seventh_text_edited = replace_all(seventh_text, dic)
seventh_file_edited = open('rep_3-3-2016-wl.txt', 'w')
seventh_file_edited.write(seventh_text_edited)

eighth_text = open('rep_3-10-2016_raw.txt', 'r').read()
eighth_text_edited = replace_all(eighth_text, dic)
eighth_file_edited = open('rep_3-10-2016-wl.txt', 'w')
eighth_file_edited.write(eighth_text_edited)

