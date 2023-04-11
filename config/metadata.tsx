interface IMetadata {
    title: string | Object;
    description: string;
}

export const IndexMetadata:IMetadata = {
    title:{
        template:"%s - F&M Butik",
        default:"F&M Butik"
    },
    description:"F&M Butik resmi web sayfasıdır."
}