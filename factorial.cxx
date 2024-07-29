#include<stdio.h>
#include<math.h>
int main(){
    int a=1;
    while (a){
    
    int value,factorial=1,i;
    printf("   Enter an integer value: ");
    scanf("%d",&value);
    if (value<=1||value>=31)
    
        printf("   Error \n");
    
    else{
    for( i=1; i<=value; i++ ){
        factorial=factorial*i;
    }
    printf("   The Factorial of %d is = %d \n",value,factorial);
    }
    }
}
