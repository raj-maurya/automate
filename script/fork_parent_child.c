#include <stdio.h>
# include <sys/types.h>
//int i=0;
int main(){

int id,i ;
for( i=0; i<4; i++){
id = fork() ;

//printf("id value : %d\n",id);
    if ( id == 0 )
    {
 //   printf ( "Child : Hello I am the child process\n");
    printf ( "Child : Child’s PID: %d\n", getpid());
    printf ( "Child : Parent’s PID: %d\n", getppid());
    }
    else
    {
 //   printf ( "Parent : Hello I am the parent process\n" ) ;
    printf ( "Parent : Parent’s PID: %d\n", getpid());
    printf ( "Parent : Child’s PID: %d\n", id);
    } 

sleep(2);
}
}
