export default ()=>[
    {
        arg:"username",
        component:"VTextField",
        options:{
            props:{
                label:"用户名",
                rules:[
                    v=>!!v||'name is required'
                ],
                clearable:true
            },
            style:{

            },
            on:{

            }
        },
        defaultValue:"jack"
    },
    // 暂时未对时间进行限制，后续增加
    {
        arg:"begin",
        component: "UDatePicker",
        options:{
            props:{
                label:"起始时间"
            }
        },
        defaultValue: new Date().toISOString().substr(0, 10),
    },
    {
        arg:"taskType",
        component:"VSelect",
        options:{
            props:{
                label: "任务类型",
                items:[
                    {
                        text:"提货任务",
                        value:"1"
                    },
                    {
                        text:"发货任务",
                        value:"2"
                    }
                ]
            }
        },
        defaultValue:"1"
    },
    // {
    //     arg:"comment",
    //     component:"VTextarea",
    //     options:{
    //         props:{
    //             label:"请输入您的评价!"
    //         }
    //     }
    // }
]
