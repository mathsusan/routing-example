export interface IRecipe {
    id: string,
    title: string,
    ingredients: Array<string>,
    instructions: Array<string>,
    picture: string
}

export const emptyRecipe: IRecipe = {
    id: '',
    title: '',
    ingredients: [],
    instructions: [],
    picture: ''
}