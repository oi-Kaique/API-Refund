import foodSvg from "../assets/food.svg"
import otherSvg from "../assets/others.svg"
import servicesSvg from "../assets/services.svg"
import transportSvg from "../assets/transport.svg"
import accommodationSvg from "../assets/accommodation.svg"

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: foodSvg,
  },
  others: {
    name: "Outros",
    icon: otherSvg,
  },
  services: {
    name: "Serviços",
    icon: servicesSvg,
  },
  transport: {
    name: "Trasnporte",
    icon: transportSvg,
  },
  accommodation: {
    name: "Hospedagem",
    icon: accommodationSvg,
  }
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>