import axios from 'axios';

export const getTodos = async (req, res) => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');

    return res.status(200).json(
        {todos: data}
        );
}

export const getTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);

        return res.status(200).json(data);

    } catch (error) {
        return res.status(404).json({
            error: 'Todo not found'
        });
    }
}


