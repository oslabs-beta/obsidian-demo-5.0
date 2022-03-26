import {Countries} from '../client/components/Countries/Countries.tsx';
import { Plants } from  '../client/components/Plants/Plants.tsx';

export const routes = [
    {
        path: '/countries',
        exact: true,
        component: Countries,
        seo: {
            title: 'Welcome to home',
            description: 'This description sample for page Home'
        }
    },
    {
        path: '/plants',
        component: Plants,
        seo: {
            title: 'Welcome to about',
            description: 'This description sample for page about'
        }
    }
]