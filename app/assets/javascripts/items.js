
//* 出品ページ

// 販売手数料
$(function () {
  $('#item_price_number').text("ー");
  $('.input-form_price').keyup(function () {
    var number = String($(this).val());
      if ((number >= 300) && (number <= 9999999)) {
        $('#item_price_number').text("¥ " + Math.floor(number * 0.03));
      } else {
        $('#item_price_number').text("ー");
      }
   });
 })
  

// 入力チェック（リアルタイムの）
$(function () {
  $('#name-form').on('focus', function () {
    $(this).css('border', '1px solid #4169e1');
  }).on('blur', function () {
     let value = $(this).val();
     if (value == "") {
       $('.error-info1').css('color', 'red').html('入力してください');
       $(this).css('border', '1px solid red');
     } else {
       $('.error-info1').html('');
       $(this).css('border', "1px solid #ddd");
     }
  })

  $('textarea.item-text_field').on('focus', function () {
    $(this).css('border', '1px solid #4169e1');
  }).on('blur', function () {
     let value = $(this).val();
     if (value == "") {
       $('.error-info2').css('color', 'red').html('入力してください');
       $(this).css('border', '1px solid red');
     } else {
       $('.error-info2').html('');
       $(this).css('border', "1px solid #ddd");
     }
  })

  $('select#parent-form').on('focus', function () {
    $(this).css('border', '1px solid #4169e1');
  }).on('blur', function () {
     let value = $(this).val();
     if (value == "") {
       $('.error-info3').css('color', 'red').html('選択してください');
       $(this).css('border', '1px solid red');
     } else {
       $('.error-info3').html('');
       $(this).css('border', "1px solid #ddd");
     }
  })

  $('#brand-form').on('focus', function () {
    $(this).css('border', '1px solid #4169e1');
  });

  $('#item-status-form').on('focus', function () {
    $(this).css('border', '1px solid #4169e1');
  }).on('blur', function () {
     let value = $(this).val();
     if (value == "") {
       $('.error-info4').css('color', 'red').html('選択してください');
       $(this).css('border', '1px solid red');
     } else {
       $('.error-info4').html('');
       $(this).css('border', "1px solid #ddd");
     }
  })

  $('#item_delevery_burden-form').on('focus', function () {
    $(this).css('border', '1px solid #4169e1');
  }).on('blur', function () {
    let value = $(this).val();
    if (value == "") {
      $('.error-info5').css('color', 'red').html('選択してください');
      $(this).css('border', '1px solid red');
    } else {
      $('.error-info5').html('');
      $(this).css('border', "1px solid #ddd");
    }
  });

  $('#item_delevery_area-form').on('focus', function () {
    $(this).css('border', '1px solid #4169e1');
  }).on('blur', function () {
    let value = $(this).val();
    if (value == "") {
      $('.error-info6').css('color', 'red').html('選択してください');
      $(this).css('border', '1px solid red');
    } else {
      $('.error-info6').html('');
      $(this).css('border', "1px solid #ddd");
    }
  });

  $('#item_delevery_day-form').on('focus', function () {
    $(this).css('border', '1px solid #4169e1');
  }).on('blur', function () {
    let value = $(this).val();
    if (value == "") {
      $('.error-info7').css('color', 'red').html('選択してください');
      $(this).css('border', '1px solid red');
    } else {
      $('.error-info7').html('');
      $(this).css('border', "1px solid #ddd");
    }
  });

  $('#price-form').on('focus', function () {
    $(this).css('border', '1px solid #4169e1');
  }).on('blur', function () {
    let value = $(this).val();
    if (value == "") {
      $('.error-info8').css('color', 'red').html('300以上9999999以下で入力してください');
      $(this).css('border', '1px solid red');
    } else {
      $('.error-info8').html('');
      $(this).css('border', "1px solid #ddd");
    }
  });

});
