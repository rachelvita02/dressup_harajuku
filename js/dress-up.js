let state = {
  shirt: -1,
  bottom: -1,
  socks: -1,
  shoes: -1,
  acc: -1,
  dress: -1,
};

nextshirt();
nextbottom();
nextacc();
nextsocks();
nextdress();

function nextshirt() {
  let dress = document.querySelector("#shirt");
  if (state.shirt < 9) {
    state.shirt++;
    shirt.setAttribute("class", `shirt${state.shirt}`);
  } else if (state.shirt === 9) {
    state.shirt = 0;
    shirt.setAttribute("class", `shirt${state.shirt}`);
  }
}

function nextshoes() {
  let shoes = document.querySelector("#shoes");
  if (state.shoes < 8) {
    state.shoes++;
    shoes.setAttribute("class", `shoes${state.shoes}`);
  } else if (state.shoes === 8) {
    state.shoes = 0;
    shoes.setAttribute("class", `shoes${state.shoes}`);
  }
}
function nextbottom() {
  let bottom = document.querySelector("#bottom");
  if (state.bottom < 7) {
    state.bottom++;
    bottom.setAttribute("class", `bottom${state.bottom}`);
  } else if (state.bottom === 7) {
    state.bottom = 0;
    bottom.setAttribute("class", `bottom${state.bottom}`);
  }
}

function nextsocks() {
  let socks = document.querySelector("#socks");
  if (state.socks < 5) {
    state.socks++;
    socks.setAttribute("class", `socks${state.socks}`);
  } else if (state.socks === 5) {
    state.socks = 0;
    socks.setAttribute("class", `hat${state.socks}`);
  }
}

function nextacc() {
  let acc = document.querySelector("#acc");
  if (state.acc < 3) {
    state.acc++;
    acc.setAttribute("class", `acc${state.acc}`);
  } else if (state.acc === 3) {
    state.acc = 0;
    acc.setAttribute("class", `acc${state.acc}`);
  }
}

function nextdress() {
  let dress = document.querySelector("#dress");
  if (state.dress < 2) {
    state.dress++;
    dress.setAttribute("class", `dress${state.dress}`);
  } else if (state.dress === 2) {
    state.dress = 0;
    dress.setAttribute("class", `shoes${state.dress}`);
  }
}

