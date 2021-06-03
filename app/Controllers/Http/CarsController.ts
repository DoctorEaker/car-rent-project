import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Car from 'App/Models/Car'

export default class CarsController {
  public async index({ view }: HttpContextContract) {
    const cars = await Car.all()
    return view.render('cars', {cars: cars})
  }

  public async create({view}: HttpContextContract) {
    const car = new Car()
    var plate = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 3; i++)
      plate += possible.charAt(Math.floor(Math.random() * possible.length));

    possible = "0123456789";
  
    for (var i = 0; i < 3; i++)
      plate += possible.charAt(Math.floor(Math.random() * possible.length));
  
    car.plate = plate

    const brands = ["BMW", "AUDI", "LEXUS", "Renaul", "Ford", "Opel", "Seat"];
    car.brand = brands[Math.floor(Math.random() * brands.length)]

    const models = ["SEDAN", "COUPE", "SPORTS", "HATCHBACK", "CONVERTIBLE", "MINIVAN", "SUV"];
    car.model = models[Math.floor(Math.random() * models.length)]

    car.price = Math.floor(Math.random() * 100000000) + 10000000;

    car.ppd = Math.floor(Math.random() * 1000000) + 100000;

    const status =  ['Available', 'Unavailable']
    car.status = status[Math.floor(Math.random() * status.length)]

    await car.save()
    return view.render('cars')

  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
