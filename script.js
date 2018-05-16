$(document).ready(function() {

  let winningCombinations = ['012', '048', '036', '147', '345', '678', '258'];
  let trackerX = [];
  let trackerO = [];
  let $box = $('.box');
  let player = '';
  let winner = '';
  // let $scoreX = 0;
  // let $scoreO = 0;

  $('#start').on('click', function() {
    player = 'X';
    $('#turn').html('X');
  });

  function logic() {
    winningCombinations.forEach(function(combo) {
      var acc = 0;
      for (let i = 0; i < combo.length; i++) {
        if (trackerX.indexOf(parseInt(combo[i])) !== -1 || trackerO.indexOf(parseInt(combo[i])) !== -1) {
          acc += 1;
          if (acc === 3) {
            setTimeout(function() {
              alert(`Player ${winner} won!`);
              // if (winner = 'X') {
              //   $scoreX += 1;
              //   $('#scoreX').html($scoreX);
              // } else if (winner = 'O') {
              //   $scoreO += 1;
              //   $('#scoreO').html($scoreO);
              // }
              acc = 0;
              clearBoard();
            }, 3);
          }
        }
      }
    });
  }

  $(document).on('click', function() {
    if (player === 'X') {
      $box.on('click', function() {
        let $this = $(this);
        let $index = parseInt($this.index());
        $this.append($('<p>X</p>'));
        $('#turn').html('O');
        player = 'O';
        trackerX.push($index);
        $box.off();
        winner = 'X';
        logic();
      });
    }
    if (player === 'O') {
      $box.on('click', function() {
        let $this = $(this);
        let $index = parseInt($this.index());
        $this.append($('<p>O</p>'));
        $('#turn').html('X');
        player = 'X';
        trackerO.push($index);
        $box.off();
        winner = 'O';
        logic();
      });
    }

  });

  function clearBoard() {
    // $('.box').children().remove()
    // trackerX = [];
    // trackerO = [];
    // player = '';
    // winner = '';
    location.reload()
  }

  $('#restart').on('click', function() {
    clearBoard();
  });

});
