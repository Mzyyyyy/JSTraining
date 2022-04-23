function detectCapitalUse(word: string): boolean {
    if(word.toLowerCase()===word||word.toUpperCase()===word){
        return true
    }
    if(word[0].toUpperCase()===word[0]){
        let rest = word.substring(1)
        if(rest.toLowerCase() === rest){
            return true
        }
    }
    return false
};
console.log(detectCapitalUse("USA"))
console.log(detectCapitalUse("FlaG"))