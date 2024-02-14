import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/static-components/header/header.component';
import { FooterComponent } from './components/static-components/footer/footer.component';
import { SharedModule } from './shared/modules/shared.module';
import { EditComponent } from './components/edit/edit.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      SharedModule
    ],
    declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      EditComponent
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'kick-off_project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('kick-off_project');
  });

  
});
