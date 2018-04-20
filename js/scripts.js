var users = [
{
    name: 'Camila',
    lastname: 'Bellis',
    age: 24,
    children: ['Pedro' , 'Juan'],
    email: 'belliscamila@gmail.com'
},
{
    name: 'Celina',
    lastname: 'Comugnaro',
    age: 20,
    children: ['Pedro' , 'Juan'],
    email: 'comugnarocelina@gmail.com'
},
{
    name: 'Carlos',
    lastname: 'Britos',
    age: 20,
    children: [],
    email: 'carlosbritos@gmail.com'
},
{
    name: 'Lucas',
    lastname: 'Daniele',
    age: 20,
    children: [],
    email: 'lucasdaniele@gmail.com'
}                
]

for(var i=0; i < users.length; i++)
{
console.log(users[i].lastname + ', ' + users[i].name + ' tiene ' + users[i].children.length + ' hijos ');
}