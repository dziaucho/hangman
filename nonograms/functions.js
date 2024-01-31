function makeElement(tag, selector) {
  let resultElement = document.createElement(`${tag}`);
  resultElement.className = `${selector}`;
  return resultElement;
}

function makeTable(size) {
  let table = document.createElement("table");
  table.className = "game-table";
  for (let i = 0; i < size; i += 1) {
    let row = document.createElement("tr");
    for (let i = 0; i < size; i += 1) {
      let ceil = document.createElement("td");
      row.appendChild(ceil);
    }
    table.appendChild(row);
  }
  return table;
}

function makeTipsTable(columns, rows) {
  let table = document.createElement("table");
  table.className = "game-table";
  for (let i = 0; i < columns; i += 1) {
    let row = document.createElement("tr");
    for (let i = 0; i < rows; i += 1) {
      let ceil = document.createElement("td");
      row.appendChild(ceil);
    }
    table.appendChild(row);
  }
  return table;
}

function getTipsCols(task) {
  let tips = [];
  let rows = task.length;
  let cols = task[0].length;

  for (let i = 0; i < cols; i += 1) {
    let amount = 0;
    let triks = [];

    for (let j = 0; j < rows; j += 1) {
      if (task[j][i] === 1) {
        amount += 1;
      } else {
        triks.unshift(amount);
        amount = 0;
      }
    }
    triks.unshift(amount);
    tips.push(triks.filter((trik) => trik !== 0));
  }
  return tips;
}

function getTipsRows(task) {
  let tips = [];
  let rows = task.length;
  let cols = task[0].length;

  for (let i = 0; i < cols; i += 1) {
    let amount = 0;
    let triks = [];

    for (let j = 0; j < rows; j += 1) {
      if (task[i][j] === 1) {
        amount += 1;
      } else {
        triks.unshift(amount);
        amount = 0;
      }
    }
    triks.unshift(amount);
    tips.push(triks.filter((trik) => trik !== 0));
  }
  return tips;
}

function getLongestColTip(tips) {
  let longest = 0;
  for (let i = 0; i < tips.length; i += 1) {
    if (tips[i].length > longest) {
      longest = tips[i].length;
    }
  }

  return longest;
}

function getLongestRowTip(tips) {
  let longest = 0;
  for (let i = 0; i < tips.length; i += 1) {
    if (tips[i].length > longest) {
      longest = tips[i].length;
    }
  }

  return longest;
}

function pushColsTips(ceils, tips, index) {
  for (let i = 0; i < ceils.length; i += 1) {
    if (tips[i][index]) {
      ceils[i].innerHTML = tips[i][index];
    }
  }
}

export { makeElement, makeTable, makeTipsTable, getTipsCols, getTipsRows, getLongestColTip, getLongestRowTip, pushColsTips };