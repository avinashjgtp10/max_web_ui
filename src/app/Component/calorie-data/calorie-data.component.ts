import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { MatTable } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { DataTableComponent } from "../data-table/data-table.component";
import { HttpClient } from "@angular/common/http";
import { GetDataService } from "../../Services/get-data.service";

export interface Data {
  c_id: number;
  c_clientmeasure: string;
  type: string;
  c_fibres: string;
}

const ELEMENT_DATA: Data[] = [];
@Component({
  selector: "calorie-data",
  templateUrl: "./calorie-data.component.html",
  styleUrls: ["./calorie-data.component.css"],
})
export class CalorieDataComponent implements OnInit {
  resultsLength = 0;

  dataSource1;

  displayedColumns: string[] = [
    "c_item",
    "c_category",
    "c_measure",
  ];
  dataSource: MatTableDataSource<Data>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private httpCilent: HttpClient,
    private getData1: GetDataService
  ) {}

  ngAfterViewInit() {}
  ngOnInit() {
    this.getData1.getData().subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  modify(){
    console.log("modify")
  }
}
