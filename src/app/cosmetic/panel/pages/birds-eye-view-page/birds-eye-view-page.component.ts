import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BirdsEyeViewProblem } from 'src/app/core/models';
import { BirdsEyeViewService } from 'src/app/core/services/birds-eye-view/birds-eye-view.service';

@Component({
	selector: 'app-birds-eye-view-page',
	templateUrl: './birds-eye-view-page.component.html',
	styleUrls: ['./birds-eye-view-page.component.scss'],
})
export class BirdsEyeViewPageComponent implements OnInit {
	birdsEyeViewProblems: BirdsEyeViewProblem[] = [];

	dataHasArrived: boolean = false;

	closeSubscriptions: Subject<void> = new Subject<void>();

	constructor(private birdsEyeViewService: BirdsEyeViewService) {}

	ngOnInit(): void {
		this.birdsEyeViewService.birdsEyeViewProblems$
			.pipe(takeUntil(this.closeSubscriptions))
			.subscribe((birdsEyeViewProblems) => {
				if (birdsEyeViewProblems.length) {
					this.birdsEyeViewProblems = birdsEyeViewProblems;
					this.dataHasArrived = true;
				}
			});
		if (!this.dataHasArrived) {
			this.birdsEyeViewService.readBirdsEyeViewProblems();
		}
	}

	ngOnDestroy(): void {
		this.closeSubscriptions.next();
	}
}
