# masters

a [Sails](http://sailsjs.org) application

To query DB: Set up a systemwide tunnel 

sudo ssh -fN -L 9999:localhost:3306 yourNetId@projpet.rit.albany.edu


9999 is a random port. 

If successful, can connect through localhost:9999

sudo lsof -i -n | egrep '\<ssh\>'
Will show you open tunnels




NEED TO REMOVE require(jquery) from jquery-ui in node modules