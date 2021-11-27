// 入力された給油量を入力する要素
const gasVolume: HTMLInputElement = document.getElementById(
  "gas-volume"
) as HTMLInputElement;
// 金額表示ボタン　クリックイベントを追加する
const priceButton = document.getElementById("price-button");
// 合計金額を表示する要素
const totalPrice = document.getElementById("total-price");
// ガソリン単価を表示する要素
const gasUnitPrice = document.getElementById("gas-unit_price");
// 割引額を表示する要素
const priceDown = document.getElementById("price-down");
// 割引金額の合計を表示する要素
const totalDisCountPrice = document.getElementById("total-discount-price");

// ガソリン自体の価格 1Lの値段
const gasPrice: number = 163;

// ガソリンの割引価格 1Lあたり3円割引
const disCount: number = 3;

// 各定数を取得して表示する為の処理
gasUnitPrice!.innerHTML = `${gasPrice}円`;
priceDown!.innerHTML = `${disCount}円`;

// ガソリン給油の合計金額をreturnする関数
// 給油量は変化するので引数として受け取る
function gasTotalPrice(volume: number): string {
  return `支払い金額:${(gasPrice - disCount) * volume}円`;
}

// ガソリンの割引合計額をreturnする関数
// 給油量は変化するので引数として受け取る
function gasTotalDisCountPrice(volume: number) {
  return `割引価格:${disCount * volume}円`;
}

// 入力された給油量を取得して上記の関数を実行する関数
function viewPrice() {
  const volume = +gasVolume.value;
  totalPrice!.innerHTML = gasTotalPrice(volume);
  totalDisCountPrice!.innerHTML = gasTotalDisCountPrice(volume);
}

// 金額表示ボタンにクリックイベントを追加する。クリック時にviewPriceが実行される。
priceButton!.addEventListener("click", viewPrice);
