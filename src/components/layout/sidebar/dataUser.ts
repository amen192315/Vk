import { IUser } from "../../../types";
import mann from '../../../assets/mann.jpg'

export const users:IUser[] = [
    {
      _id:'dimka',
      avatar:mann,
      name:'Дмитрий Лыжин',
      isInNetwork: true
    },{
      _id:'sasha',
      avatar:'https://klike.net/uploads/posts/2022-08/1661184079_j-11.jpg',
      name:'Дмитрий Лыжин',
      isInNetwork: false
    },{
      _id:'misha',
      avatar:'https://pushinka.top/uploads/posts/2023-04/1680939412_pushinka-top-p-foto-avatarki-dlya-vatsapa-prikolnie-avata-27.jpg',
      name:'Дмитрий Лыжин',
      isInNetwork: true
    },{
      _id:'sonic',
      avatar:'https://sun9-24.userapi.com/impf/c624131/v624131043/124d2/Aa_kWMVG4-E.jpg?size=912x912&quality=96&sign=bfa7e941ccf799daf63d43d210450270&c_uniq_tag=kA-zMHkJgf6EuUYWco9Q6mYR1oUC2p_q8Fd3DG_3F74&type=album',
      name:'Дмитрий Лыжин',
      isInNetwork: false
    },
  ]