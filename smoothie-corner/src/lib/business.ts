// Single source of truth for business contact details.
// Change the number/email here once and it updates everywhere on the site.
export const BUSINESS = {
  name: "Smoothie Corner",
  tagline: "Eat Healthy, Be Healthy",
  phoneDisplay: "+91 70190 51231",
  phoneIntl: "917019051231",
  email: "punithb35@gmail.com",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${BUSINESS.phoneIntl}?text=${encodeURIComponent(message)}`;

export const telLink = () => `tel:+${BUSINESS.phoneIntl}`;
export const mailLink = () => `mailto:${BUSINESS.email}`;

export const WHATSAPP_MESSAGES = {
  general:
    "Hi Smoothie Corner! I would like to know more about your menu / place a bulk order.",
  bulk: "Hi Smoothie Corner! I am interested in placing a bulk order.",
  floating:
    "Hi Smoothie Corner! I would like to know more about your menu.",
  product: (name: string) =>
    `Hi Smoothie Corner! I would like to order a ${name}.`,
};
