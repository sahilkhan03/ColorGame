let ans=document.querySelector('.rgb');
let h1=document.querySelector('h1');
let colors=[];
let squares=document.querySelectorAll('.square');
let msg=document.getElementById('msg');
let nc=document.querySelector('#nc');
let easy=document.getElementById('easy');
let med=document.getElementById('med');
let hard=document.getElementById('hard');
let size=3;
function genColors(size)
{
  for(let i=0;i<size;i++)
  {let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    colors[i]="rgb(" +r+", "+g+", "+b+")";
  }
}


genColors(size);


function pickColor()
{
  let rc= Math.floor(Math.random()*size);
  return colors[rc];
}

chosen=pickColor();
ans.textContent = chosen;


function colorall(squares)
{
  for(let j=0;j<size;j++)
  squares[j].style.backgroundColor=chosen;

}


easy.addEventListener('click', function() {
  size=3;
  colors=[];
  msg.style.color="rgba(220,53,69,1)";
  h1.style.backgroundColor="#0c3c44";
  genColors(size);
  chosen=pickColor();
  ans.textContent = chosen;
  for(let i=0;i<colors.length;i++)
  {console.log(size);
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener('click', function() {
      if(squares[i].style.backgroundColor==chosen)
      {msg.textContent = 'Correct!';
        colorall(squares);
        msg.style.color="rgb(21,87,36)";
        h1.style.backgroundColor=chosen;
        nc.textContent = 'PLAY AGAIN';
      }
      else {msg.textContent = 'Try Again';
        squares[i].style.backgroundColor= "#232323";
      }
    });
  }
  for(let i=3;i<9;i++)
  {
    squares[i].style.backgroundColor="#232323";
  }

  if(nc.textContent == 'PLAY AGAIN')
  nc.textContent = 'NEW COLORS';
  msg.textContent = '';
});

med.addEventListener('click', function() {
  size=6;
  msg.style.color="rgba(220,53,69,1)";
  h1.style.backgroundColor="#0c3c44";
  colors=[];
  genColors(size);
  chosen=pickColor();
  ans.textContent = chosen;
  for(let i=0;i<colors.length;i++)
  {console.log(size);
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener('click', function() {
      if(squares[i].style.backgroundColor==chosen)
      {msg.textContent = 'Correct!';
      msg.style.color="rgb(21,87,36)";
        colorall(squares);
        h1.style.backgroundColor=chosen;
        nc.textContent = 'PLAY AGAIN';
      }
      else {msg.textContent = 'Try Again';
        squares[i].style.backgroundColor= "#232323";
      }
    });
  }
  for(let i=6;i<9;i++)
  {
    squares[i].style.backgroundColor="#232323";
  }

  if(nc.textContent == 'PLAY AGAIN')
  nc.textContent = 'NEW COLORS';
  msg.textContent = '';
});




hard.addEventListener('click', function() {
  size=9;
  msg.style.color="rgba(220,53,69,1)";
  h1.style.backgroundColor="#0c3c44";
  colors=[];
  genColors(size);
  chosen=pickColor();
  ans.textContent = chosen;
  for(let i=0;i<colors.length;i++)
  {console.log(size);
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener('click', function() {
      if(squares[i].style.backgroundColor==chosen)
      {msg.textContent = 'Correct!';
      msg.style.color="rgb(21,87,36)";
        colorall(squares);
        h1.style.backgroundColor=chosen;
        nc.textContent = 'PLAY AGAIN';
      }
      else {msg.textContent = 'Try Again';
        squares[i].style.backgroundColor= "#232323";
      }
    });
  }

  if(nc.textContent == 'PLAY AGAIN')
  nc.textContent = 'NEW COLORS';
  msg.textContent = '';
});

nc.addEventListener('click', function() {
  colors=[];
  msg.style.color="rgba(220,53,69,1)";
  h1.style.backgroundColor="#0c3c44";
  genColors(size);
  chosen=pickColor();
  ans.textContent = chosen;
  for(let i=0;i<colors.length;i++)
  {
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener('click', function() {
      if(squares[i].style.backgroundColor==chosen)
      {msg.textContent = 'Correct!';
      msg.style.color="rgb(21,87,36)";
        colorall(squares);
        h1.style.backgroundColor=chosen;
        nc.textContent = 'PLAY AGAIN';
      }
      else {msg.textContent = 'Try Again';
        squares[i].style.backgroundColor= "#232323";
      }
    });
  }

  if(nc.textContent == 'PLAY AGAIN')
  nc.textContent = 'NEW COLORS';
  msg.textContent = '';
});


for(let i=0;i<colors.length;i++)
{msg.style.color="rgba(220,53,69,1)";
  squares[i].style.backgroundColor=colors[i];
  squares[i].addEventListener('click', function() {
    if(squares[i].style.backgroundColor==chosen)
    {msg.textContent = 'Correct!';
     msg.style.color="rgb(21,87,36)";
      colorall(squares);
      h1.style.backgroundColor=chosen;
      nc.textContent = 'PLAY AGAIN';
    }
    else {msg.textContent = 'Try Again';
      squares[i].style.backgroundColor= "#232323";
    }
  });
}
