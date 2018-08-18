import { Pageify, BasePage, BasePageData } from '@six006/core';

interface PageData extends BasePageData {
    name: string;
}

const defaultData: PageData = {
    name: '杨剑峰'
}

@Pageify()
export default class extends BasePage<PageData, any>{

    constructor() {
        super();
    }

    data = {
        name: '杨剑峰'
    }
}