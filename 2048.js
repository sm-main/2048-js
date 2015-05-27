//Using i for rows and j for columns 
(function(){
	var full_matrix= new Array(4)
	for (var i=0;i<=4;i++)
	{
		full_matrix[i]=new Array(4)
	}


	window.addEventListener("keydown",eventHandling,false);
	function eventHandling(eobj)
	{
		eobj.preventDefault();
		switch(eobj.keyCode){
			case 37:
			   moveLeft();
			   break;
			case 38:
			   moveUp();
			   break;
			case 39:
			   moveRight();
			   break;
			case 40:
			   moveDown();
			   break;    
	}



	}
	function moveLeft()
	{
		var count;
		console.log("left");
		joinHorizontally();
		for(var i=0;i<4;i++)
		{
			count=0;
			for(var j=0;j<4;j++)
			{
				if(full_matrix[i][j]!=0)
				{
					full_matrix[i][count]=full_matrix[i][j];
					count++;

				}
			}
			while(count<4)
			{
				full_matrix[i][count]=0;
				count++;
			}
		}
		render();
		addToRandomPosition();


	}
	function moveRight()
	{
		var count;
		joinHorizontally();
		for(var i=0;i<4;i++)
		{
			count=3;
			for(var j=3;j>=0;j--)
			{
				if(full_matrix[i][j]!=0)
				{
					full_matrix[i][count]=full_matrix[i][j];
					count--;


				}
			}
			while(count>=0)
			{
				full_matrix[i][count]=0;
				count--;
			}
		}
		render();
		addToRandomPosition();

	}
	function moveUp()
	{
		var count;
		joinVertically();
		for(var j=0;j<4;j++)
		{
			count=0;
			for(var i=0;i<4;i++)
			{
				if(full_matrix[i][j]!=0)
				{
					full_matrix[count][j]=full_matrix[i][j];
					count++;
				}


			}
			while(count<4)
			{
				full_matrix[count][j]=0;
				count++;
			}
		}
		render();
		addToRandomPosition();

	}
	function moveDown()
	{
		var count;
		joinVertically();
		for(var j=0;j<4;j++)
		{
			count=3;
			for(var i=3;i>=0;i--)
			{
				if(full_matrix[i][j]!=0)
				{
					full_matrix[count][j]=full_matrix[i][j];
					count--;

				}
			}
			while(count>=0)
			{
				full_matrix[count][j]=0;
				count--;
			}
		}
		render();
		addToRandomPosition();

	}
	function resetGame()
	{
		for (var i=0;i<4;i++)
		{
			for(var j=0;j<4;j++)
			{
				full_matrix[i][j]=0;
			}
		}
	}
	resetGame();
	function addToRandomPosition()
	{
		var rand1=Math.floor(Math.random()*4);
		var rand2=Math.floor(Math.random()*4);
		var pos="a"+rand1 + "" +rand2;
		//console.log(pos);
		if (full_matrix[rand1][rand2] == 0)
		{

         
		    var current = document.getElementById(pos);
		    var randNum = findRandomNumber();
		    //console.log(current+"wtf?");
		    if (randNum==2)
		    {

		        //current.className=current.className + " num_2";
		        current.innerHTML="2";
		        full_matrix[rand1][rand2]=2;
		        console.log(full_matrix[rand1][rand2]);
		        setClassName();
		    }
		    else
		    {
			    //current.className=current.className + " num_4";
			    current.innerHTML="4";
			    full_matrix[rand1][rand2]=4;
			    setClassName();
		    }
	    }
	    else
	    {
	    	addToRandomPosition();
	    }
		
	}
	addToRandomPosition();
	function findRandomNumber()
	{
		var rand=Math.random();
		if(rand>0.2)
			return 2;
		else
			return 4;
	}
	function getClassName(number)
	{
		switch(number)
		{
			case 0: return "num_0";
			case 2: return "num_2";
			case 4: return "num_4";
			case 8: return "num_8";
			case 16:return "num_16";
			case 32:return "num_32";
			case 64:return "num_64";
			case 128:return "num_128";
			case 256:return "num_256";
			case 512:return "num_512";
			case 1024:return "num_1024";
			case 2048:return "num_2048";
			case 4096:return "num_4096";
		}
	}
	function setClassName()
	{
		for(var i=0;i<4;i++)
		{
			for(var j=0;j<4;j++)
			{
				var current=document.getElementById("a"+i+""+j);
				var class_name=getClassName(full_matrix[i][j]);
				current.className="box";
				current.className= current.className+" " +class_name;
			}
		}
	}
	function joinHorizontally()
	{
		for(var i=0;i<4;i++)
		{
			for(var j=0;j<4;j++)
			{
				if(full_matrix[i][j]!=0)
				{
					for(var k=j+1;k<4;k++)
					{
						if(full_matrix[i][k]!=0)
						{
							if(full_matrix[i][j]==full_matrix[i][k])
							{
								full_matrix[i][j] = full_matrix[i][j]*2;
                                full_matrix[i][k] = 0;
                                j=k;
							}
							
							break;
						}
					}
				}
			}
		}

	}
	function joinVertically()
	{
		for(var j=0;j<4;j++)
		{
			for(var i=0;i<4;i++)
			{
				if(full_matrix[j][i]!=0)
				{
					for(var k=i+1;k<4;k++)
					{
						if(full_matrix[k][j]!=0)
						{
							if(full_matrix[i][j]==full_matrix[k][j]) 
							{
								full_matrix[i][j]=full_matrix[i][j]*2;
								full_matrix[k][j]=0;
								i=k;

							}
							break;
						}
					}
				}

			}
		}

	}
	function render()
	{
		var pos;
		var current;
		for(var i=0;i<4;i++)
		{
			for(var j=0;j<4;j++)
			{
				if(full_matrix[i][j]!=0)
				{
				    pos="a" + i +""+j;
				    console.log(pos);
				    current=document.getElementById(pos);
				    current.innerHTML=""+full_matrix[i][j];
				    setClassName();
				}
				else
				{
					document.getElementById('a'+i+''+j).innerHTML="";
				}
			

			}
		}
	}


}());
