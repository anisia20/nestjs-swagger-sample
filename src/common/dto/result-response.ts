import {ApiProperty} from "@nestjs/swagger";

export class ResultResponse {
    @ApiProperty({
        description: '결과 상태코드',
        type: Number,
        example: 1
    })
    status: number

    @ApiProperty({
        description: '결과 내용',
        type: Number,
        example: 1
    })
    desc: string

    @ApiProperty({
        description: '결과 데이터',
        type: Number,
        example: 1
    })
    data: any
}