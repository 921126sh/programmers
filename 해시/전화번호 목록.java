class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        String str = null;
        
        for(int i = 0, cnt = phone_book.length; i < cnt; i++) {
            str = phone_book[i];
            
            for(int j = 0; j < phone_book.length; j++) {
                if (i != j && phone_book[j].startsWith(str)) {
                    answer = false;
                    break;
                }
            }
            
            if (!answer) {
                break;
            }
        }
        
        return answer;
    }
}