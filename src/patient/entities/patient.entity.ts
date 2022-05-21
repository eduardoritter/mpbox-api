import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('patient')
export class Patient {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    cpf: string

    @Column()
    email: string

    @Column()
    birthdate: string

    @Column()
    note: string

    @Column({ default: false })
    inactive: boolean
}
