  import java.util.*;
  public class pp{
      public static void main(String[] args) {
          System.out.println(countRev("{}{}{}{}{}}{{{{{{}}}{{}{{{{}}{}}{}}{{}{{}{{}"));
      }
  static int countRev (String s)
    {
        if(s.length()%2!=0){
            return -1;
        }
       int count=0;
       int op=0;
       int cl=0;
       Stack<Character> stk=new Stack();
       stk.push(s.charAt(0));
       int i=1;
       int n=s.length();
       while(stk.size()>0){
           if(i<n){
           if(s.charAt(i)=='}' && stk.peek()=='{' ){
               stk.pop();
               i++;
           }
           else{
               stk.push(s.charAt(i));
               i++;
           }
       }
       else if(op==cl ) {
           if(stk.peek()=='{'){
               cl++;
               count++;
               stk.pop();
           }
           else{
               cl++;
               stk.pop();
           }}
           else if(cl>op ){
           if(stk.peek()=='{'){
               op++;
               stk.pop();
           }
           else{
                op++;
               count++;
               stk.pop();
           }
       }
    }
    return count;
    }
}