import { useTranslation } from 'react-i18next'

function Data() {
  const { t } = useTranslation()
  const data = {
    links: [
      {
        icon: './icons/dashboard.png',
        activeIcon: './icons/dashboarda.png',
        name: t('dashboard'),
        path: '/',
      },
      {
        icon: './icons/keys.png',
        activeIcon: './icons/keysa.png',
        name: t('keys'),
        path: '/keys',
      },
      {
        icon: './icons/investor.png',
        activeIcon: './icons/investora.png',
        name: t('contributors'),
        path: '/contributors',
      },
      {
        icon: './icons/users.png',
        activeIcon: './icons/usersa.png',
        name: t('contents'),
        path: '/contents',
      },
    ],
    userLinks: [
     
      
      {
        icon: './icons/investor.png',
        activeIcon: './icons/investora.png',
        name: t('contributors'),
        path: '/contributors',
      },
      {
        icon: './icons/users.png',
        activeIcon: './icons/usersa.png',
        name: t('contents'),
        path: '/contents',
      },
    ],
   
    contributors: ['م', t('fullName'), t('civilNumber'),t('boxNumber'),'رقم العضويه','تاريخ الانتساب',  'حالة التصويت','المضامين'],
    contents: ['م', t('fullName'), t('civilNumber'),t('boxNumber'),'رقم العضويه','تاريخ الانتساب',  'حالة التصويت','المفتاح الإنتخابي','إلغاء'],
   keys : ['م', t('fullName'), 'رقم الهاتف','المضامين','الصلاحية'],
 
  }

  return data
}

export default Data
