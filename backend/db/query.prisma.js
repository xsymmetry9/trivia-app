const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

class User{
    static async getUsers(){
        const users = await prisma.user.findMany({
            include:{
                tests: true
            }
        });
        return users;
    }
    static async createUser (name){
        const newUser = await prisma.user.create({
            data:{
                name: name
            }
        });
        return newUser;
    }
    static async inputAnswer(data){
        const newAnswer = await prisma.test.create({
            data: {
                question_id: data.question_id,
                user_answer: data.user_answer,
                user:{
                    connect: {id: data.userId}
                }
            }
        });
        return newAnswer;
    } 

    static async isCorrect(data){
        const result = await prisma.user.update({
                where: { id: data.userId },
                data:{correct: { increment: 1,}}
        })
        return result;
    }
    static async isWrong(data){
        const result = await prisma.user.update({
            where: {id: data.userId},
            data: { wrong: {increment: 1}}
        })
        return result;
    }
    static async resetTest(data){
        const deleteAll = await prisma.test.deleteMany({
            where:{
                userId: data.userId
            }
        });

        //Resets counter
        await this.resetCounter(data.userId);
        return deleteAll;
    }
    static async resetCounter(id){
        const reset = await prisma.user.update({
            where: { id: id },
            data: { correct: 0, wrong: 0}
        })
        return reset;
    }
}

module.exports = User;