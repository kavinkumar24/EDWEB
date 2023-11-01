import { 
    NAV_ITEM_TYPE_TITLE, 
    NAV_ITEM_TYPE_COLLAPSE, 
    NAV_ITEM_TYPE_ITEM 
} from 'constants/navigation.constant'

const navigationConfig = [
    {
        key: 'home',
		path: '/home',
		title: 'Home',
		translateKey: 'nav.home',
		icon: 'home',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
    /** Example purpose only */
    {
        key: 'quiz',
		path: '/quiz',
		title: 'Quizz',
		translateKey: 'nav.quiz',
		icon: 'singleMenu',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
    {
        key: 'collapseMenu1',
		path: '',
		title: 'Materials',
		translateKey: 'nav.collapseMenu.collapseMenu1',
		icon: 'collapseMenu',
		type: NAV_ITEM_TYPE_COLLAPSE,
		authority: [],
        subMenu: [
            {
                key: 'Materials in pdf',
                path: '/pdf_materials',
                title: 'Pdf Materials',
                translateKey: 'nav.Materials in pdf',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'Materials in Video',
                path: '/video_materials',
                title: 'Video Materials',
                translateKey: 'nav.Materials in Video',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
        ]
    }
]

export default navigationConfig