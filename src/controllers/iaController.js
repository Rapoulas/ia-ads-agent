export function iaController(req, res){
    const {question} = req.body

    return res.json({
        message: 'Teste ia',
        question
    })
}   