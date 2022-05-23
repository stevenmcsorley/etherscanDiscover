import axios from "axios";

export enum PageType {
    SingleCurrency = 1,
    ListCurrencies
}

export interface ICurrency {
    data(): void;
    buildingBlocks(): void;
    endpointId: string;
}


export class BasePageType implements ICurrency {
    constructor(public endpointId: string) {
        console.log('endpointId', this.endpointId)
    }

    data = async () => {
        let response = null;
        try {
            response = await axios.get(
                `http://localhost:4000/crypto/coinmarketcap/${this.endpointId}`
            );
        } catch (e) {
            response = null;
            throw new Error(e.message)
        }
        if (response) {
            return response.data;
        }
    }
    buildingBlocks(): void {
        console.log('base buildingBlocks')
    }
}


export class ListCurrencies extends BasePageType {
    constructor(public endpointId: string) {
        super(endpointId);
        console.log('ListCurrencies', this.endpointId)
    }

}


export class SingleCurrency extends BasePageType {
    constructor(public endpointId: string) {
        super(endpointId);
        console.log('SingleCurrency', this.endpointId)
    }

}

export class PageFactory {
    public createPage(endpointId: string, page_type: PageType) {

        if (page_type === PageType.ListCurrencies) {
            return new ListCurrencies(endpointId)
        }
        if (page_type === PageType.SingleCurrency) {
            return new SingleCurrency(endpointId)
        }

    }
}
