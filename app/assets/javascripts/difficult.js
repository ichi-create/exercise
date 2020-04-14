$(function(){
  var score = 0
  var show = ""
  $('.choice1').click(function(){
    var answer = $(this).attr('id');

    if (answer === "q1_3") {
      $('.q1').hide(1000);
      $('.answer1_o').show();
      show = '.answer1_o'
      score ++
      }else {
        $('.q1').hide(1000);
        $('.answer1_x').show();
        show = '.answer1_x'
    }
  });
  $('.next1').click(function(){
    if (show === '.answer1_o') {
      $('.answer1_o').hide(1000);
      $('.q2').show();
    } else {
      $('.answer1_x').hide(1000);
      $('.q2').show();
    }
  });
  $('.choice2').click(function(){
    var answer = $(this).attr('id');

    if (answer === "q2_3") {
      $('.q2').hide(1000);
      $('.answer2_o').show();
      show = '.answer2_o'
      score ++
      }else {
        $('.q2').hide(1000);
        $('.answer2_x').show();
        show = '.answer2_x'
    }
  });
  $('.next2').click(function(){
    if (show === '.answer2_o') {
      $('.answer2_o').hide(1000);
      $('.q3').show();
    } else {
      $('.answer2_x').hide(1000);
      $('.q3').show();
    }
  });
  $('.choice3').click(function(){
    var answer = $(this).attr('id');

    if (answer === "q3_1") {
      $('.q3').hide(1000);
      $('.answer3_o').show();
      show = '.answer3_o'
      score ++
      }else {
        $('.q3').hide(1000);
        $('.answer3_x').show();
        show = '.answer3_x'
    }
  });
  $('.next3').click(function(){
    if (show === '.answer3_o') {
      $('.answer3_o').hide(1000);
      $('.q4').show();
    } else {
      $('.answer3_x').hide(1000);
      $('.q4').show();
    }
  });
  $('.choice4').click(function(){
    var answer = $(this).attr('id');

    if (answer === "q4_3") {
      $('.q4').hide(1000);
      $('.answer4_o').show();
      show = '.answer4_o'
      score ++
      }else {
        $('.q4').hide(1000);
        $('.answer4_x').show();
        show = '.answer4_x'
    }
  });
  $('.next4').click(function(){
    if (show === '.answer4_o') {
      $('.answer4_o').hide(1000);
      $('.q5').show();
    } else {
      $('.answer4_x').hide(1000);
      $('.q5').show();
    }
  });
  $('.choice5').click(function(){
    var answer = $(this).attr('id');

    if (answer === "q5_2") {
      $('.q5').hide(1000);
      $('.answer5_o').show();
      show = '.answer5_o'
      score ++
      }else {
        $('.q5').hide(1000);
        $('.answer5_x').show();
        show = '.answer5_x'
    }
  });
  $('.next5').click(function(){
    if (show === '.answer5_o') {
      $('.answer5_o').hide(1000);
      $('.q6').show();
    } else {
      $('.answer5_x').hide(1000);
      $('.q6').show();
    }
  });
  $('.choice6').click(function(){
    var answer = $(this).attr('id');

    if (answer === "q6_1") {
      $('.q6').hide(1000);
      $('.answer6_o').show();
      show = '.answer6_o'
      score ++
      }else {
        $('.q6').hide(1000);
        $('.answer6_x').show();
        show = '.answer6_x'
    }
  });
  $('.next6').click(function(){
    if (show === '.answer6_o') {
      $('.answer6_o').hide(1000);
      $('.q7').show();
    } else {
      $('.answer6_x').hide(1000);
      $('.q7').show();
    }
  });
  $('.choice7').click(function(){
    var answer = $(this).attr('id');

    if (answer === "q7_1") {
      $('.q7').hide(1000);
      $('.answer7_o').show();
      show = '.answer7_o'
      score ++
      }else {
        $('.q7').hide(1000);
        $('.answer7_x').show();
        show = '.answer7_x'
    }
  });
  $('.next7').click(function(){
    if (show === '.answer7_o') {
      $('.answer7_o').hide(1000);
      $('.q8').show();
    } else {
      $('.answer7_x').hide(1000);
      $('.q8').show();
    }
  });
  $('.choice8').click(function(){
    var answer = $(this).attr('id');

    if (answer === "q8_1") {
      $('.q8').hide(1000);
      $('.answer8_o').show();
      show = '.answer8_o'
      score ++
      }else {
        $('.q8').hide(1000);
        $('.answer8_x').show();
        show = '.answer8_x'
    }
  });
  $('.next8').click(function(){
    if (show === '.answer8_o') {
      $('.answer8_o').hide(1000);
      $('.q9').show();
    } else {
      $('.answer8_x').hide(1000);
      $('.q9').show();
    }
  });
  $('.choice9').click(function(){
    var answer = $(this).attr('id');

    if (answer === "q9_3") {
      $('.q9').hide(1000);
      $('.answer9_o').show();
      show = '.answer9_o'
      score ++
      }else {
        $('.q9').hide(1000);
        $('.answer9_x').show();
        show = '.answer9_x'
    }
  });
  $('.next9').click(function(){
    if (show === '.answer9_o') {
      $('.answer9_o').hide(1000);
      $('.q10').show();
    } else {
      $('.answer9_x').hide(1000);
      $('.q10').show();
    }
  });
  $('.choice10').click(function(){
    var answer = $(this).attr('id');

    if (answer === "q10_4") {
      $('.q10').hide(1000);
      $('.answer10_o').show();
      show = '.answer10_o'
      score ++
      }else {
        $('.q10').hide(1000);
        $('.answer10_x').show();
        show = '.answer10_x'
    }
  });
  $('.next10').click(function(){
    if (show === '.answer10_o') {
      $('.answer10_o').hide(1000);
      $('.question_answer').show();
    } else {
      $('.answer10_x').hide(1000);
      $('.question_answer').show();
    }
  $('#score').text(score + '/10')
  });
});
