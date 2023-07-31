#include<stdio.h>
#include<stdlib.h>
typedef struct node
{
    int info;
    struct node *next;

}node;
node *insert(node *head)
{
    node *p;
    p=(node*)malloc(sizeof(node));
    int val;
    printf("enter the value to be inserted ");
    scanf("%d",&val);
    p->info=val;
    p->next=NULL;
    if(head==NULL)
    {
        head=p;
    }
    else{
        node *temp=head;
        while(temp->next!=NULL)
        {
            temp=temp->next;
        }
        temp->next=p;

    }
    return(head);
}
void display(node *head)
{
    node *temp=head;
    while(temp!=NULL)
    {
        printf("%d ",temp->info);
        temp=temp->next;

    }
}

node *delete(node *head)
{


    printf("enter the key to be searched ");
    node *temp=head;
    node *prev=NULL;
    int key;
    scanf("%d",&key);
    while(temp!=NULL)
    {

    if(temp->info==key)
    {
        if(prev==NULL)
        {
            node *ptr=temp;

            temp=temp->next;
            head=temp;
            free(ptr);

        }
        else
        {
            node *ptr=temp;
            prev->next=temp->next;
            temp=temp->next;
            free(ptr);
        }
    }
    else
    {
        prev=temp;
        temp=temp->next;
    }
    }
    return(head);

}
int main()
{
    node *head=NULL;
    printf("enter 1 to insert");
    printf("\n");
    printf("enter 2 to display");
    printf("\n");
    printf("enter 3  to delete");
    printf("\n");

while(1)
{
    int ch;
    printf("enter choice");
    scanf("%d",&ch);
    switch(ch)
    {
        case 1:
        head=insert(head);
        break;
        case 2:
        display(head);
        break;
        case 3:
        head=delete(head);
        break;
        case 4:
        exit(0);


    }
}
return 0;
}



