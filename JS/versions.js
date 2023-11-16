var versions = function(arr){
    let compare = (str1, str2) =>{
        let len1 = str1.length,
            len2 = str2.length;
        let i = 0, j = 0;
        while(i < len1 && j < len2){
            if(str1.charAt(i) == "."){
                if(str2.charAt(j) == "."){
                    return compare(str1.slice(i+1), str2.slice(j+1))
                }
                return -1
            }
            if(str2.charAt(j) == "."){
                return 1
            }
            const ch1 = parseInt(str1.charAt(i));
            const ch2 = parseInt(str2.charAt(j));
            if(ch1 == ch2){
                i++;
                j++;
            }else if(ch1 < ch2){
                return -1
            }else{
                return 1
            }
        }
        if(i == 0){
            return -1
        }
        return 1; 
    }

    return arr.sort(compare)
}

console.log(versions(["1.5", "1.45", "1.7.5", "1.55", "1.45.1"]))