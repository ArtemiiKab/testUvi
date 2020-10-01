'use strict';

const allRows = [...$('tbody > tr')];
const view2Info = [
  {
    phone: '0987658923',
    date: '15.06.2018',
    age: 18,
    status: 'не замужем',
    job: 'Сильпо, менеджер',
    edu: 'Высшее КНЛУ менеджмент организаций',
  },
  {
    phone: '0506123123',
    date: '21.05.2018',
    age: 23,
    status: 'холост',
    job: 'Фора, кассир',
    edu: 'Высшее НТУУ КПИ. Финансы и кредит.',
  },
  {
    phone: '0966671290',
    date: '22.04.2018',
    age: 36,
    status: 'замужем',
    job: 'Фора, супервайзер',
    edu: 'Высшее НТУУ КПИ. Финансы и кредит.',
  },
];

function changeRow(e) {
  /* This func assigning green color,
   arrow to clicked left row and inputs content for right box */
  [...$('.SectionTable__person')].forEach(row =>
    row.classList.remove('SectionTable__chosen'));
  e.currentTarget.classList.add('SectionTable__chosen');

  const currentRowHTML = e.currentTarget.children[0].innerHTML;
  const currentData = view2Info.find(el => currentRowHTML.includes(el.phone));

  $('.RightBox__when').html(`Добавлен: ${currentData.date}`);
  $('.RightBox__age').html(`Возраст: ${currentData.age}`);
  $('.RightBox__status').html(`Семейное положение: ${currentData.status}`);
  $('.RightBox__job').html(`Работает: ${currentData.job}`);
  $('.RightBox__edu').html(`Образование: ${currentData.edu}`);
}

$('tbody > tr').click(function(event) {
  // This function hides previous table and creates new one
  $('thead').css('display', 'none');
  $('tbody >').css('display', 'none');

  const currentRowPhone = event.currentTarget.children[1].innerHTML;
  const currentData = view2Info.find(el => el.phone === currentRowPhone);
  const currentRowIndex = view2Info.indexOf(currentData);

  $('tbody').append(
    `<tr class="SectionTable__mainRow">
      <td class="SectionTable__left"></td>
    </tr>`
  );

  allRows.map((row, i1) => {
    const columnLeft = [...row.children].filter((td, i2) => i2 <= 2);

    if (i1 === currentRowIndex) {
      $('.SectionTable__left').append(
        `<div class="SectionTable__person SectionTable__chosen" >
          <div>
            ${columnLeft[0].innerHTML}
            <div>
              <span>${columnLeft[2].innerHTML}</span>${columnLeft[1].innerHTML}
            </div>
          </div>
        </div>`
      );
    } else {
      $('.SectionTable__left').append(
        `<div class="SectionTable__person">
          <div>
            ${columnLeft[0].innerHTML}
            <div>
              <span>${columnLeft[2].innerHTML}</span>${columnLeft[1].innerHTML}
            </div>
          </div>
        </div>`
      );
    }
  });

  $('.SectionTable__person').click((e) => changeRow(e));

  $('.SectionTable__mainRow').append(
    `<td class="SectionTable__right">
      <div class="RightBox">
        <p class="RightBox__when">Добавлен: ${currentData.date}</p>
        <button>X</button>
      </div>
      <p class="RightBox__age">Возраст: ${currentData.age}</p>
      <p class="RightBox__status">Семейное положение: ${currentData.status}</p>
      <p class="RightBox__job">Работает: ${currentData.job}</p>
      <p class="RightBox__edu">Образование: ${currentData.edu}</p>
    </td>`
  );

  $('.RightBox button').click(() => closeWidget());
});

function closeWidget() {
  // This function deletes current table and displays original
  $('.SectionTable__mainRow').remove();
  $('thead').css('display', 'table-header-group');
  $('tbody >').css('display', 'table-row');
}
