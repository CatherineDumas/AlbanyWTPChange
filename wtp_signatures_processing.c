//takes 3 command line arguments: executable, infile, outfile. infile and outfile are CSV 

#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>


#define MAX_ARG 3 //max arguments
#define MAX_ID 64
#define MAX_PET_ID 64
#define MAX_TYPE 32
#define MAX_NAME 2
#define MAX_ZIP 5
#define MAX_CREATED 39
int MAX_USER = MAX_ZIP + MAX_NAME;
int MAX_LINE = sizeof(char) * 206; //max line size is chars added together and then int
//created is of length 39

int main(int argv, char *argc[])
{
	FILE * infile; //file pointers
	FILE * outfile;
	char currLine[MAX_LINE + 1]; //line to be read from infile
	char id[MAX_ID + 1]; //size of id
	char petition_id[MAX_PET_ID + 1]; //size of petition id
	char type[MAX_TYPE + 1]; //size of char
	char name[MAX_NAME + 1]; //size of name
	char zip[MAX_ZIP + 1]; //size of zip
	char created[MAX_CREATED]; //when created
	char *tokPtr; //token to be pulled
	double hold = 0;  //token holder
	char userId[MAX_USER + 1]; //userID to be made
	int i = 0;

    if( argv != MAX_ARG){ //check num arguments
        fprintf(stderr,"Error: invalid number of arguments.\n");
        exit(1);
    }


	if((infile = fopen(argc[1],"r")) == NULL ) //open files
 	{
		fprintf(stderr,"Error: file could not be opened.\n");
		exit(1);
	}
	if((outfile = fopen(argc[2],"w")) == NULL ) //open files
 	{
		fprintf(stderr,"Error: file could not be opened.\n");
		exit(1);
	}


	if(fgets(currLine,MAX_LINE,infile) == NULL) //skip first three lines
	{ //get each line
		printf("Error reading first line."); fflush(stdout);
		exit(1);
	}

	if(fgets(currLine,MAX_LINE,infile) == NULL) //skip first three lines
	{ 
		printf("Error reading second line."); fflush(stdout);
		exit(1);		
	}

	if(fgets(currLine,MAX_LINE,infile) == NULL) //skip first three lines
	{ 
		printf("Error reading second line."); fflush(stdout);
		exit(1);		
	}

	fprintf(outfile,"\n\nid,petition_id,type,userId,created\n"); //print to outfile

	while(fgets(currLine,MAX_LINE,infile) != NULL) //now we're on line with data
	{ //get a line from the file
		if((tokPtr = strtok(currLine, ",")) != NULL) //get first token from line
		{
			strcpy(id,tokPtr);
		}

		if((tokPtr = strtok(NULL, ",\"")) != NULL) //get first token from line
		{
			strcpy(petition_id,tokPtr);
		}

		if((tokPtr = strtok(NULL, ",\"")) != NULL) //get first token from line
		{
			strcpy(type,tokPtr);
		}

		if((tokPtr = strtok(NULL, ",\"")) != NULL) //get first token from line
		{
			strcpy(name,tokPtr);
		}

		if((tokPtr = strtok(NULL, ",\"")) != NULL) //get first token from line
		{
			strcpy(zip,tokPtr);
		}

		if((tokPtr = strtok(NULL, ",\"")) != NULL) //get first token from line
		{
			strcpy(created,tokPtr);
		}
		
		//uppercase names
		for(i = 0; i < strlen(name); i++){
			name[i] = toupper(name[i]);
		}
		//nnow check values
		if(strlen(name) == 2){ //name isn't 0 and is two digits
			if((strlen(zip) == 5) || (strlen(zip) == 9 )){ //zip is length 5 or 9
			//need to add code to see if zip code is legitament
				strcpy(userId, name);
				strcat(userId,zip);
				fprintf(outfile, "%s,%s,%s,%s,%s\n",id,petition_id,type,userId,created); //print to outfile
			}
		}
	 } // while fgetting

	if(fclose(infile) == EOF)
	{
		fprintf(stderr,"Error: File cannot be closed.\n");
	}//close file


	if(fclose(outfile) == EOF){
		fprintf(stderr,"Error: File cannot be closed.\n");
	} //close file
	return 0;
} //end main

