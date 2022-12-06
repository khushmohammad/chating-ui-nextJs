
export default function handler(req, res) {

    res.status(200).json(

        {
            user: [
                {
                    id: 1,
                    name: "user1",
                    status: "at Office",
                },
                {
                    id: 2,
                    name: "user2",
                    status: "at school",
                },
                {
                    id: 3,
                    name: "user3",
                    status: "at home",
                },
                {
                    id: 4,
                    name: "user4",
                    status: "at work",
                },
                {
                    id: 5,
                    name: "user5",
                    status: "at desk    ",
                }
            ]
        }

    )
} 