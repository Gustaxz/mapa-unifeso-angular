import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface InputValues {
  value: string;
  id: number;
}

@Component({
  selector: 'app-dialog-search',
  templateUrl: './dialog-search.component.html',
  styleUrls: ['./dialog-search.component.css'],
})
export class DialogSearchComponent implements OnInit {
  courseSelect: string | undefined = undefined
  periodSelect: string | undefined = undefined
  subjectSelect: string | undefined = undefined

  constructor(public dialogRef: MatDialogRef<DialogSearchComponent>) {}

  courses: InputValues[] = [
    { value: 'Ciência da Computação', id: 0 },
    { value: 'Engenharia', id: 1 },
    { value: 'Medicina', id: 2 },
  ];

  periods: InputValues[] = [
    { value: '1° Período', id: 0 },
    { value: '2° Período', id: 1 },
    { value: '3° Período', id: 2 },
  ];

  subjects: InputValues[] = [
    {value: "Arquitetura de Computadores", id: 0},
    {value: "Matemática", id: 1},
    {value: "Programação", id: 2}
  ]

  days: string[] = [
    'S', 'T', 'Q', 'Q', 'S' 
  ]

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
