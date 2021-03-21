import vietnamese from 'assets/images/icons/common/vietnamese.svg';
import united_kingdom from 'assets/images/icons/common/united_kingdom.svg';

export const list_notis = [
  {
    id: 1,
    type: "order",
    title: "Your order is placed",
    created_at: new Date(),
  },
  {
    id: 2,
    type: "user",
    title: "New message received",
    created_at: new Date(),
  },
  {
    id: 3,
    type: "project",
    title: "Your item is shipped",
    created_at: new Date(),
  },
  {
    id: 4,
    type: "feature",
    title: "New message received",
    created_at: new Date(),
  }
] 

export const list_langs = [
  {
    id: 'vi',
    name: 'vietnamese',
    avatar: vietnamese
  },
  {
    id: 'en',
    name: 'united_kingdom',
    avatar: united_kingdom
  },
]