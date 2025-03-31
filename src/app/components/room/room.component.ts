import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import * as ZegoUIKitPrebuilt from 'zego-uikit-prebuilt';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
@Component({
  selector: 'app-room',
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit,AfterViewInit {
  
  private route = inject(ActivatedRoute);
  @ViewChild('root')
  root!: ElementRef;
  roomID: string = '';
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['roomId']);
      this.roomID = params['roomId'];
    });
  }

  ngAfterViewInit(){
    const appID = 292744512;
    const serverSecret = "a3351c747e2176bda3521f6347c16240";
    // const roomID = this.route.snapshot.paramMap.get('roomId') || '';
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID, 
      serverSecret, 
      this.roomID,
      Date.now().toString(),
      Date.now().toString()
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: this.root.nativeElement,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
          window.location.protocol + '//' + 
          window.location.host + window.location.pathname +
            '?roomID=' +
            this.roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  }
}
