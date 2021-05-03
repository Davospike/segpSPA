it('should go to next question', fakeAsync(() => {
    spyOn(component, 'goTo');
    const goToLink = fixture.debugElement.query(By.css('#goto'));
    goToLink.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(component.goTo).toHaveBeenCalled();
  }))