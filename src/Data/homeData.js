// Import all images
import iPhone16ProMaxBlack from "../assets/images/iPhone 16 Pro Max-Black.png";
import vivoV40Lite from "../assets/images/vivo V40 Lite.png";
import iPhone16ProMaxTitanium from "../assets/images/iPhone 16 Pro Max-Titanium.png";
import iPhone16ProBlack from "../assets/images/iPhone 16 Pro-Black.png";
import iPhone16ProTitanium from "../assets/images/iPhone 16 Pro-Titanium.png";
import iPhone16eWhite from "../assets/images/iPhone 16e-white.png";
import iPhone16ePink from "../assets/images/iPhone 16e.png";
import macbookPro16 from "../assets/images/MACBOOK PRO 16.2INCH.png";
import asusTUF2025 from "../assets/images/ASUS TUF FA401WV- 2025.jpg";
import msiKatana2024 from "../assets/images/MSI KATANA 17 B13VGK-KH-2024.jpg";
import oppoA3xBlue from "../assets/images/Oppo A3x-Blue.png";
import oppoA3xRed from "../assets/images/Oppo A3x-Nebula Red.png";
import oppoA5ProBlue from "../assets/images/Oppo A5 Pro​ (2025)-Blue.png";
import oppoA5ProBrown from "../assets/images/Oppo A5 Pro​ (2025)-Brown.png";
import oppoA60Blue from "../assets/images/Oppo A60-Blue.png";
import oppoA60Midnight from "../assets/images/Oppo A60-Midnight.png";

// Create the data array
 const data = [
  {
    id: 1,
    title: "iPhone 16 Pro Max Black",
    img: iPhone16ProMaxBlack,
    color: "Black",
    announced: "2024, September",
    display: "6.9 inches, LTPO OLED",
    resolution: "1290 x 2796 pixels",
    chipset: "Apple A18 Pro",
    ram: "8GB",
    battery: "4500mAh",
    price: "$1299"
  },
  {
    id: 2,
    title: "iPhone 16 Pro Max Silver",
    img: vivoV40Lite,
    color: "Silver",
    announced: "2024, September",
    display: "6.9 inches, LTPO OLED",
    resolution: "1290 x 2796 pixels",
    chipset: "Apple A18 Pro",
    ram: "8GB",
    battery: "4500mAh",
    price: "$1299"
  },
  {
    id: 3,
    title: "iPhone 16 Pro Max Titanium",
    img: iPhone16ProMaxTitanium,
    color: "Titanium",
    announced: "2024, September",
    display: "6.9 inches, LTPO OLED",
    resolution: "1290 x 2796 pixels",
    chipset: "Apple A18 Pro",
    ram: "8GB",
    battery: "4500mAh",
    price: "$1299"
  },
  {
    id: 4,
    title: "iPhone 16 Pro Black",
    img: iPhone16ProBlack,
    color: "Black",
    announced: "2024, September",
    display: "6.7 inches, LTPO OLED",
    resolution: "1290 x 2796 pixels",
    chipset: "Apple A18",
    ram: "8GB",
    battery: "4300mAh",
    price: "$1199"
  },
  {
    id: 5,
    title: "iPhone 16 Pro Titanium",
    img: iPhone16ProTitanium,
    color: "Titanium",
    announced: "2024, September",
    display: "6.7 inches, LTPO OLED",
    resolution: "1290 x 2796 pixels",
    chipset: "Apple A18",
    ram: "8GB",
    battery: "4300mAh",
    price: "$1199"
  },
  {
    id: 6,
    title: "iPhone 16e White",
    img: iPhone16eWhite,
    color: "White",
    announced: "2024, October",
    display: "6.1 inches, OLED",
    resolution: "1170 x 2532 pixels",
    chipset: "Apple A17",
    ram: "6GB",
    battery: "3500mAh",
    price: "$799"
  },
  {
    id: 7,
    title: "iPhone 16e Pink",
    img: iPhone16ePink,
    color: "Pink",
    announced: "2024, October",
    display: "6.1 inches, OLED",
    resolution: "1170 x 2532 pixels",
    chipset: "Apple A17",
    ram: "6GB",
    battery: "3500mAh",
    price: "$799"
  },
  {
    id: 8,
    title: "MacBook Pro 16.2-inch",
    img: macbookPro16,
    color: "Silver",
    announced: "2023, November",
    display: "16.2 inches, Liquid Retina XDR",
    resolution: "3456 x 2234 pixels",
    chipset: "Apple M3 Max",
    ram: "32GB",
    battery: "100Wh",
    price: "$3499"
  },
  {
    id: 9,
    title: "ASUS TUF FA401WV (2025)",
    img: asusTUF2025,
    color: "Black",
    announced: "2025, January",
    display: "15.6 inches, IPS",
    resolution: "1920 x 1080 pixels",
    chipset: "AMD Ryzen 9",
    ram: "32GB",
    battery: "90Wh",
    price: "$1599"
  },
  {
    id: 10,
    title: "MSI Katana 17 B13VGK (2024)",
    img: msiKatana2024,
    color: "Black",
    announced: "2024, March",
    display: "17.3 inches, IPS",
    resolution: "1920 x 1080 pixels",
    chipset: "Intel i7-13620H",
    ram: "16GB",
    battery: "53Wh",
    price: "$1399"
  },
  {
    id: 11,
    title: "Oppo A3x Blue",
    img: oppoA3xBlue,
    color: "Blue",
    announced: "2024, May",
    display: "6.56 inches, IPS LCD",
    resolution: "720 x 1612 pixels",
    chipset: "Mediatek Helio G85",
    ram: "6GB",
    battery: "5000mAh",
    price: "$149"
  },
  {
    id: 12,
    title: "Oppo A3x Nebula Red",
    img: oppoA3xRed,
    color: "Red",
    announced: "2024, May",
    display: "6.56 inches, IPS LCD",
    resolution: "720 x 1612 pixels",
    chipset: "Mediatek Helio G85",
    ram: "6GB",
    battery: "5000mAh",
    price: "$149"
  },
  {
    id: 13,
    title: "Oppo A5 Pro (2025) Blue",
    img: oppoA5ProBlue,
    color: "Blue",
    announced: "2025, February",
    display: "6.72 inches, IPS LCD",
    resolution: "1080 x 2400 pixels",
    chipset: "Snapdragon 680",
    ram: "8GB",
    battery: "5000mAh",
    price: "$179"
  },
  {
    id: 14,
    title: "Oppo A5 Pro (2025) Brown",
    img: oppoA5ProBrown,
    color: "Brown",
    announced: "2025, February",
    display: "6.72 inches, IPS LCD",
    resolution: "1080 x 2400 pixels",
    chipset: "Snapdragon 680",
    ram: "8GB",
    battery: "5000mAh",
    price: "$179"
  },
  {
    id: 15,
    title: "Oppo A60 Blue",
    img: oppoA60Blue,
    color: "Blue",
    announced: "2024, April",
    display: "6.67 inches, IPS LCD",
    resolution: "720 x 1604 pixels",
    chipset: "Snapdragon 680",
    ram: "8GB",
    battery: "5000mAh",
    price: "$169"
  },
  {
    id: 16,
    title: "Oppo A60 Midnight",
    img: oppoA60Midnight,
    color: "Midnight",
    announced: "2024, April",
    display: "6.67 inches, IPS LCD",
    resolution: "720 x 1604 pixels",
    chipset: "Snapdragon 680",
    ram: "8GB",
    battery: "5000mAh",
    price: "$169"
  }
];
export default data
