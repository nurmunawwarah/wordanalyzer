What is word analyzer?

A Word Analyzer analyzes any word and determine number of consonants and vowels. You need to develop a simple React Native mobile application that analyzes any word given by a user.

Steps:
1. User type their input (it can be word or sentence)
2. Because i use string.replace(/ /g, "").length, the appl will count the total character from the input and ignore the blank space.
3. Beside, by using string.match(/[aeiou]/gi), this app also will check whether the input is match with the vowel letter array and count total vowel letters and return it.
4. The total letter of consonant will then be calculated by subtracting the total letter of vowel from the total character of input.

Result:
<img width="308" alt="result" src="https://user-images.githubusercontent.com/93121632/141682182-c1c74310-fad9-4432-a786-26d71facb47c.png">
