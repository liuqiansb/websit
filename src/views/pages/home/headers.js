export default (scope)=>[
    {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
    },
    {
        text: 'Calories',
        value: 'calories',
        // 千万不要用箭头函数，否则this作用域无法控制
        display(h,item){
            // 此处又需要使用箭头函数，你是傻子吗连jsx里面事件使用箭头函数也忘了
            return  <VBtn small onClick={()=>scope.click(item)}>{item.calories}</VBtn>
        },

    },
    {
        text: 'Fat (g)',
        value: 'fat'
    },
    {
        text: 'Carbs (g)',
        value: 'carbs'
    },
    {
        text: 'Protein (g)',
        value: 'protein'
    },
    {
        text: 'Iron (%)', value: 'iron'
    },
]
