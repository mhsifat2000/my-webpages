#include <stdio.h>
int main()
{
    printf("THIS IS A CONVARTER DAYS TO MONTH AND YEARS\n");
    int t_days;
    printf("Enter your total days");
    scanf("%i", &t_days);
    int year, month, day;
    year = t_days / 365;
    printf("year: ");
    printf("%i \n ", year);

    int temp = t_days % 365;
    month = temp / 30;
    printf("month: ");
    printf("%i \n ", month);

    day = temp % 30;
    printf("day: ");
    printf("%i \n ", day);

}