import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Patient } from './entities/patient.entity'
import { CreatePatientDto } from './dto/create-patient.dto'
import { UpdatePatientDto } from './dto/update-patient.dto'

@Injectable()
export class PatientService {
    constructor(
        @InjectRepository(Patient)
        private readonly patientRepository: Repository<Patient>
    ) {}

    create(createPatientDto: CreatePatientDto) {
        const patient = new Patient()
        patient.name = createPatientDto.name
        patient.cpf = createPatientDto.cpf
        patient.email = createPatientDto.email
        patient.birthdate = createPatientDto.birthdate
        patient.note = createPatientDto.note

        return this.patientRepository.save(patient)
    }

    findAll(): Promise<Patient[]> {
        return this.patientRepository.find()
    }

    findOne(id: number) {
        return this.patientRepository.findOne(id)
    }

    update(id: number, updatePatientDto: UpdatePatientDto) {
        return `This action updates a #${id} patient`
    }

    remove(id: number) {
        return `This action removes a #${id} patient`
    }
}
